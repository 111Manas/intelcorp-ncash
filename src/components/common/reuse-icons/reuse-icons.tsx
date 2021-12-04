import './reuse-icons.scss'

type TReuseIcon = {
    className?: string;
}


const ReuseIcon: React.FC<TReuseIcon> = ({ className, children }) => {
    return (
        <div className={`wrap-icon ${className}`} id="reuseIcon" role='button'>
            {children}
        </div>
    )
}

export default ReuseIcon