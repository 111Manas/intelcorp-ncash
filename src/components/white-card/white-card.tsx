import './white-card.scss'
type TWhiteCard = {
    className?: string;
}

const WhiteCard: React.FC<TWhiteCard> = ({ className, children }) => {
    return (
        <div className={`white-card ${className}`}>
            {children}
        </div>
    )
}

export default WhiteCard
