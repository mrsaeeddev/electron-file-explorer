export const filterByIndex = (files: any[], index: Number) => {
    return files.filter((v) => v.index !== index)
}
