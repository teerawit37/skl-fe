import { useRouter } from "next/router";
import Image from 'next/image';

interface ICardProps {
    title: string;
    instructor: string;
    university: string;
    banner: string;
    start: string;
    end: string;
    img: string;
    // uimg: string;
}

const universityList = [
    {
        label: 'มหาวิทยาลัยธรรมศาสตร์',
        value: 'TU'
    },
    {
        label: 'มหาวิทยาลัยจุฬาลงกรณ์',
        value: 'CU'
    },
    {
        label: 'มหาวิทยาลัยศิลปากร',
        value: 'SU'
    },
    {
        label: 'มหาวิทยาลัยศรีนครินทรวิโรฒ',
        value: 'SWU'
    }
]



const Card = ({ title, instructor, university, banner, start, end, img }: ICardProps) => {

    const mapUniversity = (label: string) => {
        const data = universityList.find((item) => item.value === label)
        return data?.label;
    }
    return (
        <div className="skl-card">
            <div className="skl-card__image-container">
                <img className="skl-card__img" src={banner} />
            </div>
            <div className="skl-card__container">
                <div>
                    <div className="skl-card__title">{title}</div>
                    <div className="skl-card__display">
                        <div className="skl-card__circle-img">
                            <img className="skl-card__img" src={img} />
                        </div>
                        <div className="skl-card__label">{instructor}</div>
                    </div>
                    <div className="skl-card__display d-none d-lg-flex mb-4">
                        <div className="skl-card__circle-img">
                        //mock up (It's best to keep it in the cloud storage. And access with id)
                            <img className="skl-card__img" src={`/images/university/${university.toLowerCase()}.png`} />
                        </div>
                        <div className="skl-card__label">{mapUniversity(university)}</div>
                    </div>
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