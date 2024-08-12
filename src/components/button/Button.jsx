export default function Button({ title, className, handleClick, type}) {
    
    return (
      <button className={className} onClick={handleClick} type={type}>
        {title}
      </button>
    );
  }