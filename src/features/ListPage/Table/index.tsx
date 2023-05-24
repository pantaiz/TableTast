import styles from "./PageList.module.scss";
import {DatasType} from "../ListType";
import {TABLE_HEADER_ACCOUNT, TABLE_HEADER_NAME} from "./const";


type PageListPropsType = {
    data: Array<DatasType>
}
type RowPropsType = {
    name: {
        first: string
        last: string
    }
    amount: string
}

export const PageList = (props: PageListPropsType) => {
    //создаём наши строки таблицы
    const rows = props.data.map((item) => <Row key={item._id} name={item.name} amount={item.amount}/>)

    return (
        <div>
            <HeaderTable/>
            {rows}
        </div>
    )
}


const HeaderTable = () => {
    return (
        <div className={styles.rowHeader}>
            <div className={styles.itemHeader}>
                {TABLE_HEADER_NAME}
            </div>
            <div className={styles.itemHeader}>
                {TABLE_HEADER_ACCOUNT}
            </div>
        </div>
    )
}
const Row = ({name, amount}: RowPropsType) => {
    return (
        <div className={styles.row}>
            <div className={styles.itemRow}>
                {name.first} {name.last}
            </div>
            <div className={styles.itemRow}>
                {amount}
            </div>
        </div>
    )
}

