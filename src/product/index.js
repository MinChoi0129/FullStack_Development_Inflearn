import {useParams} from 'react-router-dom'


function ProductComponent() {
    const params = useParams();
    console.log(params.id)
    return <h1>상품페이지{params.id}</h1>
}

export default ProductComponent;