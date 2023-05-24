export interface ListPageType {
    total: number,
    data: Array<DatasType>
}

export interface DatasType {
    type: pageType
    _id: string
    amount: string
    name: {
        first: string
        last: string
    },
    company: string
    email: string
    phone: string
    address: string

}

export type pageType = "income" | "outcome" | "loan" | "investment"
export type NavbarPagesType = Array<{ type: pageType, title: string }>