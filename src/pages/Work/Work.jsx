import { useEffect } from 'react';
import style from '@/style.module.scss';
import { useState, useCallback,useRef } from 'react';
import Planets from '@components/Planets/Planets';
import PlanetsContent from '@/contexts/PlanetContext';
import PlanetsPaginator from '@/components/Planets/PlanetsPaginator';

export default function Work(){
    //Танец с бубном из-за запросов при повторной
    //отрисовке вызваной изменением state
    const executingRequest = useRef(false);
    const countNotSet = useRef(true);
    const pageNotSet = useRef(true);
    //Конец танца.
    const [page, setPage] = useState(1);
    const [objCount, setCount] = useState(1);
    const [data, setData] = useState([]);
    //pageSize
    const [pageSize, setPageSize] = useState(10);
    const [isLoading, setIsLoading] = useState(false);

    const getPage = useCallback(()=>{
        //Танец продолжается
        if (executingRequest.current || (!pageNotSet.current && !countNotSet.current) ){
            return;
        }
        //Конец танца.
        executingRequest.current = true;
        setIsLoading(true);
        fetch(`https://swapi.dev/api/planets?page=${page}`)
            .then(answer=>answer.json())
            .then(result=>{
                console.log('Get result.');
                //Танец продолжается
                if (countNotSet.current){
                    setCount(result.count);
                    countNotSet.current = false;
                }
                executingRequest.current = false;
                pageNotSet.current = false;
                //Конец танца.
                setData(result.results?result.results:[]);
                setIsLoading(false);
            });
    }, [page]);
    useEffect(() => {
        document.title = `Визитная карточка - Работа`;
        getPage();
    });  
    return (
    <div className={style.container}>
        <h3>Использовался - <a href="https://swapi.dev/" target='_blank'>SWAPI</a> The Star Wars API</h3>
        <div className={style["p-rel"]}>
            <PlanetsContent.Provider value={{
                currentPage:page,
                setPage:pNum=>{
                    pageNotSet.current = true;
                    setPage(pNum);
                },
                totalObjCount:objCount,
                pageSize:pageSize
            }}>
                <Planets data={data}/>
                <PlanetsPaginator />
            </PlanetsContent.Provider>
            {isLoading && <div className={style.bunner}><div className={style.bunner__message}>Загрузка</div></div>}
        </div>
    </div>
    );
}