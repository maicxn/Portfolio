interface DataResponse {
    attributes: {
        title: string
        content: string
        image: string
    }
    id: number
}

export default interface IData {
    data: DataResponse[]
}