import {LIST_PAGE_HEADER_TITLES as TablePages} from "./../const";
import styles from "./HeaderList.module.scss";
import classNames from "classnames";
import {pageType} from "../ListType";
import {Box, Button, ButtonGroup} from "@mui/material";

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
            <Button size={'large'} color={"secondary"} key={page.type} variant={page.type === currentPage?'contained':'outlined'} onClick={() => onTitleClickHadler(index.toString())}>
                {page.title}
            </Button>
        )
    })

    return (
        <Box component="nav"  aria-label="My site" sx={{display:'flex',justifyContent:'space-around',alignItems:'center',padding: '20px'}}>

            <ButtonGroup>
                    {mappedHeaderTitles}

                </ButtonGroup>


        </Box>
    )
}