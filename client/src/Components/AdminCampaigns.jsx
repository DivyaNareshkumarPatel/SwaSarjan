// now not in use but in future




import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { API } from '../service/api';
import AdminCampaignForm from './AdminCampaignForm';
import CampaignComponent from '../Components/CampaignComponent';

const AdminCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCampaigns = async () => {
    try {
      const response = await API.getCampaigns();
      if (response.isSuccess) {
        setCampaigns(response.data);
      } else {
        console.error('Error fetching campaigns:', response.msg);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.deleteCampaign(id);
      fetchCampaigns();
    } catch (error) {
      console.error('Error deleting campaign:', error);
    }
  };

  return (
    <>
      <AdminCampaignForm fetchCampaigns={fetchCampaigns} />
      <Box sx={{ marginTop: 4, marginBottom: '50px' }}>
        <Typography variant="h5" gutterBottom>
          Existing Campaigns
        </Typography>
        {loading ? (
          <p>Loading campaigns...</p>
        ) : (
          <Grid container spacing={2}>
            {campaigns.map((campaign) => (
              <Grid item key={campaign.id} xs={12} sm={6} md={4}>
                <CampaignComponent detail={campaign} onDelete={() => handleDelete(campaign.id)} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default AdminCampaigns;
