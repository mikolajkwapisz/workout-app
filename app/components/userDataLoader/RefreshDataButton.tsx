'use client'
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "@/app/state/slices/userSlice";
import { AppDispatch } from "@/app/state/store";
import { MdOutlineRefresh } from "react-icons/md";
import { RootState } from "@/app/state/store";

const RefreshButton = () => {
  const dispatch = useDispatch<AppDispatch>();  // Type dispatch correctly
  const {loading, error} = useSelector((state: RootState) => state.user)

  const handleRefreshData = () => {
    dispatch(fetchUserData())
  }

  return (
    <div className="p-1">
      <button className="text-white hover:cursor-pointer" onClick={handleRefreshData} disabled={loading}>
        {loading ? <p className="text-3xl">...</p> : <MdOutlineRefresh size={30} className="hover:text-custom-accent"/>}
      </button>
      
      {error && <p className="text-red">{error}</p>}
    </div>
  );
};

export default RefreshButton;
