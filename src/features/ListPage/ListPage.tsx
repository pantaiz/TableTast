import styles from "./ListPage.module.scss";
import {HeaderList} from "./NavbarTable";
import {PageList} from "./Table";
import data from "./../../data/data.json"
import {DatasType, ListPageType, pageType} from "./ListType";
import {useEffect, useMemo, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {LIST_PAGE_HEADER_TITLES as TablePages} from "./const";


export const ListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState<pageType>("income");

    useEffect(() => {
        //копируем с урла наши квери параметры
        const indexPageTable: string | null = searchParams.get('tab')
        //если они не null меняем текущую страницу
        if (indexPageTable!=null) setCurrentPage(TablePages[+indexPageTable].type)
    }, [searchParams])
    //для того что бы типизация была корректной делаем копию
    const cloneDataJSON: ListPageType = useMemo(() => {
        return JSON.parse(JSON.stringify(data))
    }, [])

    //фильтруем данные для нужной страницы
    const listData: Array<DatasType> = cloneDataJSON.data
        .filter((item) => {
            return item.type === currentPage
        })

    return (
        <div className={styles.mainContainer}>
            <div  className={styles.tabbleWrapper}>
                <HeaderList setSearchParams={setSearchParams} currentPage={currentPage}/>
                <PageList data={listData} />
            </div>
        </div>

    )
}