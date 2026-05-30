import api from "../../../../utils/axios";

export const fetchDashboardData = async () => {

  try {
    const response = await api.get("/admin/dashboard/dashboard-data");

    const responseData = response?.data;
    
    const { success, message } = responseData;

    if (!success) return {success: false, message };

     const { dashboardData } = responseData;
    return { success: true, dashboardData };

  } catch (err) {
    return { success: false, message: err.response?.data?.message };
}
};