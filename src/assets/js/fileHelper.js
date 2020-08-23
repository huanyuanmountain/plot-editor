/**
 * @param {String} content  文件的内容，已经序列化的数据
 * @param {String} name 文件名字
 */
export const downloadJsonFile = (content, name) => {
    const blob = new Blob([content], {
        type: 'text/plain'
    })
    const link = document.createElement('a')
    const fileName = `${name}.json`
    link.href = window.URL.createObjectURL(blob)
    link.download = fileName
    link.click()
    window.URL.revokeObjectURL(link.href)
}

/**
 * @读取文件，返回 Promise，resolve 的是字符串
 */
export const uploadJsonFile = () => new Promise((resolve, reject) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.onchange = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()

        if (file.type != 'application/json') {
            // console.log('请上传json文件')
            reject()
        } else {
            reader.readAsText(file)
            reader.onload = (data) => resolve(data.target.result)
        }
    }

    input.click()
})