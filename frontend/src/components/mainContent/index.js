import React,{useState, useEffect} from 'react';
import TimeTracker from '../timeTracker';
import RecordsFrom from '../recordsFrom';
import BgAnimation from '../bgAnimation';
import ShowMore from '../showMore';
import {setRecords} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import './style.scss';

import {getRecordsApi} from "../../api";
// import recordsJson from '../../mock/records.json';

export default function MainContent(props) {
  const dispatch = useDispatch();
  const {records} = useSelector(state => state);

  const [recorded, setRecorded] = useState(false)
  const [loadMore, setLoadMore] = useState(false)
  const [loadPage, setLoadPage] = useState(0)

  function checkTodayRecord(data) {
    const today = new Date().toString()

    const findToday = data.filter(element => {
      return formateDateToCompare(element.date)===formateDateToCompare(today)
    });

    if(findToday.length>0){
      return setRecorded(true)
    }
    setRecorded(false)
  }
  
  const formateDateToCompare = (data) => {
    const arr = data.split(" ")
    arr[4]= "00:00:00"

    return arr.slice(0,4).toString()

  }
  const getLoadMore = () => {
    const newPage = loadPage+1
    setLoadPage(newPage)
    getBdData(newPage)
  }
  
  const checkLoadMore = (arr) => {
   if(arr.length<5){
     return setLoadMore(true)
   }
   return setLoadMore(false)
  }
  const getBdData = async (page) => {
    props.setLoading(true)

    const data = await getRecordsApi(page)
    
    checkLoadMore(data)

    dispatch(setRecords([...records,...data]))
    
    props.setLoading(false)

  }

  useEffect(() => {
  
    getBdData(loadPage)
    
  }, [dispatch])
  
  useEffect(() => {
    if(records!==[]){
      checkTodayRecord(records)
    }
  }, [records])

  return (
    <main className="main__container">
      <div className="main__animation"><BgAnimation/></div>
      <div className="default__card"><TimeTracker recorded={recorded} setModal={props.setModal} /></div>
      <div className="default__card"><RecordsFrom setModal={props.setModal} /></div>
      <ShowMore action={getLoadMore} noMore={loadMore}/>
    </main>
  );
}


