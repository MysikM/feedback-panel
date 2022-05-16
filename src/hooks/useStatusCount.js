import {useSelector} from "react-redux";

export const useStatusCount = () => {
    const {productRequests} = useSelector(state => state.suggestion);

    const roadMapCount = productRequests.reduce((res, el) => {
        if(!res.some(item => item.title ===  el.status)) {
            res.push({title: el.status, count: 0});
        } else {
            res = res.map((item) => item.title === el.status ? {...item, count: item.count + 1} : item)
        }
        return res;
    },[])

    return {roadMapCount}
}