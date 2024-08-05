import FirstImg from '../../assets/workAt/firstImg.webp'
import SecondImg from '../../assets/workAt/secondImg.webp'
import ThirdImg from '../../assets/workAt/thirdImg.webp'

export default function ImageWidget(){
    return(
        <div className='image-widget'>
            <img src={FirstImg} alt="Image1"/>
            <img src={SecondImg} alt="Image2" />
            <img src={ThirdImg} alt="Image3" />
        </div>
    )
}