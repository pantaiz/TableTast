import {LIST_PAGE_HEADER_TITLES as TablePages} from "./../const";
import styles from "./HeaderList.module.scss";
import classNames from "classnames";
import {pageType} from "../ListType";

type HeaderListPropsType = {
    currentPage: pageType
    setSearchParams: (searchParams: string) => void
}

export const HeaderList = (
    {
        currentPage,
        setSearchParams
    }
    : HeaderListPropsType) => {


    const onTitleClickHadler = (index: string) => {
        //устанавливаем квери параметры в наш url
        setSearchParams('tab=' + index)
    }
    //Делаем наш navbar
    const mappedHeaderTitles = TablePages.map((page, index) => {
        //добавляем стили для активного класса
        const titleClassName = classNames(styles.title, page.type === currentPage ? styles.activeTitle : '')

        return (
            <div key={page.type} onClick={() => onTitleClickHadler(index.toString())} className={titleClassName}>
                {page.title}
            </div>
        )
    })

    return (

        <div  className={styles.headerWrapper}>
            {mappedHeaderTitles}
        </div>

    )
}