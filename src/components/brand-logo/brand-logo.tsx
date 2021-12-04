type Props = {
    src: string;
    width: string
    height: string
    classname?: string;
    name: string
};

const BrandLogo: React.FC<Props> = ({ src, width, height, classname, name }) => {
    return (
        <img src={src} width={width} height={height} className={classname} alt={name} title={name} />
    )
}
export default BrandLogo