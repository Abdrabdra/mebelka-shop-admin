export const convertDate = (date: string) => {
    if (date) {
        return date.slice(0,10).split('-').reverse().join('-')
    } else return ""

}