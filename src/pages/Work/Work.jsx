import { useEffect, useContext } from 'react';
import style from '@/style.module.scss';
import { useState, useCallback,useRef } from 'react';
import Planets from '@components/Planets/Planets';
import PlanetsContent from '@/contexts/PlanetContext';
import PlanetsPaginator from '@/components/Planets/PlanetsPaginator';
import LayoutContext from '@/contexts/LayoutContext';

export default function Work(){
    const [page, setPage] = useState(1);
    const [objCount, setCount] = useState(1);
    const [data, setData] = useState([]);
    //pageSize
    const [pageSize, setPageSize] = useState(10);
    const {showBunner,hideBunner} = useContext(LayoutContext);

    const getPage = useCallback(()=>{
        showBunner('Загрузка!')
        fetch(`https://swapi.dev/api/planets?page=${page}`)
            .then(answer=>answer.json())
            .then(result=>{
                console.log('Get result.');
                setCount(result.count);
                setData(result.results?result.results:[]);
                hideBunner();
            });
    }, [page]);
    useEffect(() => {
        document.title = `Визитная карточка - Работа`;
        getPage();
    }, [page]);  
    return (
    <div className={style.container}>
        <h3>Использовался - <a href="https://swapi.dev/" target='_blank'>SWAPI</a> The Star Wars API</h3>
        <div className={style["p-rel"]}>
            <PlanetsContent.Provider value={{
                currentPage:page,
                setPage:pNum=>{
                    setPage(pNum);
                },
                totalObjCount:objCount,
                pageSize:pageSize
            }}>
                <Planets data={data}/>
                <PlanetsPaginator />
            </PlanetsContent.Provider>
        </div>
    </div>
    );
}