export default function Button({title, fontSize, color, bgColor, height, width, borderRadius}){
    return(
        <button
            style={{
                fontSize: fontSize,
                color:color,
                backgroundColor: bgColor,
                width: width,
                height: height,
                borderRadius: borderRadius
            }}
        >{title}</button>
    )
}