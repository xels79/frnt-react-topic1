import { useEffect } from 'react';
import style from '@/style.module.scss';
import { useState, useCallback,useRef } from 'react';
import Planets from '@components/Planets/Planets';
import PlanetsContent from '@/contexts/PlanetContext';
import PlanetsPaginator from '@/components/Planets/PlanetsPaginator';

export default function Work(){
    const executingRequest = useRef(false);
    const countNotSet = useRef(true);
    const pageNotSet = useRef(true);
    const [page, setPage] = useState(1);
    const [objCount, setCount] = useState(1);
    const [data, setData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [isLoading, setIsLoading] = useState(false);

    const getPage = useCallback(()=>{
        console.log('try fetch');
        if (executingRequest.current || (!pageNotSet.current && !countNotSet.current) ){
            console.log("busy");
            return;
        }
        console.log('start fetch',`page: ${page}`);
        executingRequest.current = true;
        setIsLoading(true);
        fetch(`https://swapi.dev/api/planets?page=${page}`)
            .then(answer=>answer.json())
            .then(result=>{
                console.log(result);
                if (countNotSet.current){
                    setCount(result.count);
                    countNotSet.current = false;
                }
                setData(result.results?result.results:[]);
                executingRequest.current = false;
                pageNotSet.current = false;
                setIsLoading(false);
            });
    }, [page]);
    useEffect(() => {
        document.title = `Визитная карточка - Работа`;
        getPage();
    });  
    return (
    <div className={style.container}>
        <h3>Блог</h3>
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
            {isLoading && <div className={style.bunner}><div className={style.bunner__message}>Загрузка</div></div>}
        </PlanetsContent.Provider>
    </div>
    );
}