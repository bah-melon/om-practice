import FirstImg from '../../assets/workAt/firstImg.webp'
import SecondImg from '../../assets/workAt/secondImg.webp'
import ThirdImg from '../../assets/workAt/thirdImg.webp'

export default function ImageWidget({image1, image2, image3}){
    return(
        <div className='image-widget'>
            <img src={image1} alt="Image1"/>
            <img src={image2} alt="Image2" />
            <img src={image3} alt="Image3" />
        </div>
    )
}