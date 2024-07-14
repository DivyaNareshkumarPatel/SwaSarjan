import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { API } from '../service/api';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Registered Users
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>State</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Pin Code</TableCell>
              <TableCell>Pan Card</TableCell>
              <TableCell>Adhar Card</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Signature</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{new Date(user.dob).toLocaleDateString()}</TableCell>
                <TableCell>{user.addr}</TableCell>
                <TableCell>{user.state}</TableCell>
                <TableCell>{user.city}</TableCell>
                <TableCell>{user.pinCode}</TableCell>
                <TableCell>{user.panCard}</TableCell>
                <TableCell>{user.adharCard}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>
                  <img src={user.photo} alt="User Photo" style={{ width: '50px', height: '50px' }} />
                </TableCell>
                <TableCell>
                  <img src={user.signature} alt="User Signature" style={{ width: '50px', height: '50px' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersList;
