import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isDarkMode, selectAllTabs, selectFilterState, selectTab, toggleFilter } from '../redux/reducer/uiSlice';
import { resetParams, selectParams, setParams } from '../redux/reducer/recipeSlice';

export const useFilterPanel = () => {

    const dispatch = useDispatch()
    const isDark = useSelector(isDarkMode)
    const params = useSelector(selectParams)
    const selectedTab = useSelector(selectAllTabs)

    const isOpenFilter = useSelector(selectFilterState)

    const isSelectedFilter = (title)=>{
        return selectedTab?.includes(title)
    }

    const handleCloseFilter = ()=>{
        dispatch(toggleFilter())
    }

    const handleFilterClick = (filterCategory, option) => {
        console.log(filterCategory, option.value, "helo")
        dispatch(
            setParams({
                key: filterCategory,
                value: option.value
            })
        );
    };

    const handleResetFilter = ()=>{
        selectedTab([])
        dispatch(resetParams())
    }

    const handleSelectTab = (item)=>{
        dispatch(selectTab(item))
    }
  return {
    isOpenFilter,
    params,
    isSelectedFilter,
    handleCloseFilter,
    handleFilterClick,
    handleResetFilter,
    handleSelectTab,
    isDark
  }
}
