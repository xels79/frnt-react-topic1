import { useContext } from "react";
import PlanetsContent from "@/contexts/PlanetContext";
import style from './planet.module.scss';
export default function PlanetsPaginator(){
    const {
        currentPage,
        setPage,
        totalObjCount,
        pageSize
    } = useContext(PlanetsContent);
    const buttonCount = Math.ceil(totalObjCount / pageSize);
    return (
        <div className={style.pagination}>
            {totalObjCount &&
                <ul className={style.pagination__list}>
                    <li className={currentPage<2?style["list__link-disabled"]:style.list__item} key={`pgn-key-first`}>
                        { currentPage<2 && <a className={style.list__link} >Первая</a>}
                        { currentPage>1 && <a className={style.list__link} onClick={()=>setPage(1)}>Первая</a>}
                    </li>
                    <li className={currentPage<2?style["list__link-disabled"]:style.list__item} key={`pgn-key-prev`}>
                        { currentPage<2 && <a className={style.list__link} >{"<<"}</a>}
                        { currentPage>1 && <a className={style.list__link} onClick={()=>setPage(currentPage-1)}>{"<<"}</a>}
                    </li>
                    {[...Array(buttonCount).keys()].map(key=>
                        <li className={currentPage==key+1?style["list__link-active"]:style.list__item} key={`pgn-key-${key}`}>
                            <a className={style.list__link} onClick={()=>setPage(key+1)}>{key+1}</a>
                        </li>)}
                    <li className={currentPage>buttonCount-1?style["list__link-disabled"]:style.list__item} key={`pgn-key-nxt`}>
                        { currentPage>buttonCount-1 && <a className={style.list__link} >{">>"}</a>}
                        { currentPage<=buttonCount-1 && <a className={style.list__link} onClick={()=>setPage(currentPage+1)}>{">>"}</a>}
                    </li>
                    <li className={currentPage>buttonCount-1?style["list__link-disabled"]:style.list__item} key={`pgn-key-last`}>
                        { currentPage>buttonCount-1 && <a className={style.list__link} >Последняя</a>}
                        { currentPage<=buttonCount-1 && <a className={style.list__link} onClick={()=>setPage(buttonCount)}>Последняя</a>}
                    </li>
                </ul>
            }
        </div>
    );
}