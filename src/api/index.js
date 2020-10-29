const files=require.context("./",true,/\.js$/)
export default files.keys().filter(item=>!item.includes("index")).reduce((pre,item)=>{
    pre={
        ...pre,
        ...files(item).default
    }
    return pre;
},{})