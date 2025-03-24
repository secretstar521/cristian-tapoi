import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface props {
  data: { id: number; title: string; cover: string; description: string; tag: string[] };
}

function ShowcaseCard({ data }: props) {
  const { title, description, cover, id } = data;

  return (
    <div
      className={
        'w-full card h-[490px] lg:h-[510px] bg-[#1d1d2a] overflow-hidden shadow-[1px_1px_15px_#13131cd3] rounded-[2px] hover:bg-[#28283a]'
      }
      style={{ transition: 'all 0.3s ease-out' }}
    >
      <Link href={`/showcase/${id}`}>
        <div className={'w-full h-[55%] image__container relative'}>
          <Image src={`/images/covers/${cover}`} alt={cover} fill />
        </div>
        <style>
          {`
            .card:hover{
                background: #28283a;
                transform: scale(1.03) translateX(-10px);
                box-shadow: 2px 2px 10px #13131cb5;
                .image__container {
                  filter: grayscale(0);
                }
            }
            .image__container {
              filter: grayscale(2);
              transition: all 0.6s ease-out;
            }
          `}
        </style>
      </Link>

      <div className={'w-full py-[30px] px-[20px] h-[45%]'}>
        <div className="flex items-center gap-[10px]">
          {data?.tag.map((tag) => (
            <div key={tag} className={tag}>
              {tag.replaceAll('_', ' ')}
            </div>
          ))}
        </div>

        <h5 className="text-white my-[10px]">{title}</h5>
        <p
          title={description}
          className="text-[16px] leading-[150%] w-[90%] mt-[5px] text-ellipsis overflow-hidden"
          style={{
            display: '-webkit-box',
            boxOrient: 'vertical',
            WebkitBoxOrient: 'vertical',
            lineClamp: 3,
            WebkitLineClamp: 3,
            overflowWrap: 'anywhere',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default ShowcaseCard;
