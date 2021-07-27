import dev from '../../assets/img/dev.svg'

interface svgImgProps {
    className: string;
}

export const DevImg = ({ className }: svgImgProps) => {
    return <img className={className} src={dev} alt="img" />;
};
