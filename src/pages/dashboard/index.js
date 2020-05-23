import React from "react";
import axios from "axios";

import Header from "../../components/header";
import Loader from "../../components/loader";
import Toast from "../../components/toast/index" 
import SideNav from "../../components/sidenav";
import WeatherView from "./weatherView";
import { cityFilter } from "../../utils";

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weatherDetails: [],
      cityDetails: '',
      isFetching: true,
      isError: false,
      showToast: false,
      toastMessage: '',
      toastTitle: '',
      sideNavShow: false,
      fetching: false,
      cityList: [],
      indexNo: 0
    }
  }

  componentDidMount() {
    this.fetchDetails(1283240);
  }

  handleToggle = () => {
    this.setState({sideNavShow: !this.state.sideNavShow, cityList:[]})
  }

  fetchDetails = (id) => {
    this.setState({isFetching: true, sideNavShow: false, cityList: []})
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=ff5d084541aac5b27ef0f46c449da8ca`)
    .then(( res ) => {
      if(res.data.cod === "200"){
        this.setState({isFetching: false, cityDetails: res.data.city, weatherDetails: res.data.list})
      }else{
        this.setState({isFetching: false, showToast: true, toastMessage: 'Error occured while loading the data', toastTitle: 'Failed!'})
        setTimeout(()=> this.setState({showToast: false}), 5000)
      }
    })
    .catch((err) => {
      this.setState({isFetching: false, showToast: true, toastMessage: 'Error occured while loading the data', toastTitle: 'Failed!'})
      setTimeout(()=> this.setState({showToast: false}), 5000)
    })
  }

  handleChange = (data) => {
    if(data){
      var res =  cityFilter(data);
      this.setState({cityList: res})
    }else{
      this.setState({cityList: []})
    }
  }

  handleIndexChange = (type, index) => {
    let { weatherDetails } = this.state;
    if(index === weatherDetails.length - 1){
      this.setState({indexNo: 0})
    }else if(type == "minus" && index < 0) {
      this.setState({indexNo: weatherDetails.length - 1})
    }else{
      this.setState({indexNo: index })
    }
  }

  render() {
    let { isFetching, showToast, toastMessage, toastTitle, sideNavShow, cityList, weatherDetails, cityDetails } = this.state;
    return (
      <div>
        <Header handleToggle={ this.handleToggle } show={ sideNavShow } />
        <Loader show={ isFetching } />
        <Toast show={ showToast } title={ toastTitle } message={ toastMessage } />
        <SideNav
        show={ sideNavShow } 
        handleToggle={ this.handleToggle }
        handleChange={ this.handleChange } 
        cityList={cityList} 
        fetchDetails={ this.fetchDetails } />
        <WeatherView 
        { ...this.state } 
        show={ isFetching } 
        cityDetails={ cityDetails } 
        weatherDetails={ weatherDetails }
        handleIndexChange={ this.handleIndexChange } />      
      </div>
    );
  }
}

export default Dashboard;
