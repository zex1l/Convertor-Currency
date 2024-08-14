export const parseDate = (date : Date) : string => {
    const day = date.getDate()-1
    const month = date.getMonth()+1
    const years = date.getFullYear()

    return `${day}-${month}-${years}`
}