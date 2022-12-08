import { useRouter } from "next/router";
import Image from 'next/image';

interface ICardProps {
    title: string;
    instructor: string;
    university: string;
    banner: string;
    start: string;
    end: string;
}



const Card = ({ title, instructor, university, banner, start, end }: ICardProps) => {
    return (
        <div className="skl-card">
            <div className="skl-card__image-container">
                <img className="skl-card__img" src={banner} />
            </div>
            <div className="skl-card__container">
                <div>
                    <div className="skl-card__title">{title}</div>
                    <div className="skl-card__label">{instructor}</div>
                    <div className="d-none d-lg-block skl-card__label mb-4">{university}</div>
                </div>

                <div>
                    <div className="d-flex justify-content-end">
                        <div className="skl-card__time-container">
                            <div className="skl-card__notice">เริ่มสอน</div>
                            <div className="skl-card__time">{start}</div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="skl-card__time-container">

                            <div className="skl-card__notice">หมดเวลา</div>
                            <div className="skl-card__time">{end}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;