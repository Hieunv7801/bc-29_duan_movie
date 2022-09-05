import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import MultipleRowSlick from '../../component/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLiPhimAction';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLiRapAction';
import HomeCarousel from '../../template/HomeTemplate/carouselHome/HomeCarousel';
import HomeMenu from './homeMenu/HomeMenu'

export default function Home() {

  const { arrFilm } = useSelector(state => state.QuanLiPhimReducer);
  const {heThongRapChieu} = useSelector (state => state.QuanLiRapReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);
    dispatch(layDanhSachHeThongRapAction());
  },[])
  return (
    <div>
       <HomeCarousel/>
      <section className='text-gray-600 body-font'>
        <div className='container px-2 py-24 mx-auto'>
          <MultipleRowSlick arrFilm={arrFilm} />
        </div>
      </section>
      <div className="container mx-36">
        <HomeMenu heThongRapChieu={heThongRapChieu}/>
      </div>
    </div>

  )
}
