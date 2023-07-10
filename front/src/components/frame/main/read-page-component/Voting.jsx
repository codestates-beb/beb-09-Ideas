import React from 'react'
import styled from '@emotion/styled'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Button as MuiButton } from '@mui/material';

const VotingView = styled.div`
  width: 100%;
  margin: 5px;
`;

const TitleView = styled.div`
  display: block;
  text-align: left;
  margin: 25px;
  padding: 10px;
  font-size: 20px;
  font-weight: bolder;  
`;

const VoteView = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  height: 500px;
`;

const VoteButton = styled.div`
  display: block;
  margin-right:150px;
  float: right;
`;



const Voting = () => {
  return (
    <VotingView>
      <TitleView>
        Vote
      </TitleView>

      <VoteView>
        <div>
          <FormControl sx={{ m: 0, minWidth: 150 }}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
              <MenuItem value={"Manage"}>Manage</MenuItem>
              <MenuItem value={"Economy"}>Economy</MenuItem>
              <MenuItem value={"Security"}>Security</MenuItem>
              <MenuItem value={"AI"}>AI</MenuItem>
              <MenuItem value={"Blockchain"}>Blockchain</MenuItem>
              <MenuItem value={"Cloud"}>Cloud</MenuItem>
            </Select>
          </FormControl>


          <FormControl sx={{ m: 0, minWidth: 150 }}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
              <MenuItem value={"Manage"}>Manage</MenuItem>
              <MenuItem value={"Economy"}>Economy</MenuItem>
              <MenuItem value={"Security"}>Security</MenuItem>
              <MenuItem value={"AI"}>AI</MenuItem>
              <MenuItem value={"Blockchain"}>Blockchain</MenuItem>
              <MenuItem value={"Cloud"}>Cloud</MenuItem>
            </Select>
          </FormControl>


        </div>

        <div>
          <FormControl sx={{ m: 0, minWidth: 150 }}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
              <MenuItem value={"Manage"}>Manage</MenuItem>
              <MenuItem value={"Economy"}>Economy</MenuItem>
              <MenuItem value={"Security"}>Security</MenuItem>
              <MenuItem value={"AI"}>AI</MenuItem>
              <MenuItem value={"Blockchain"}>Blockchain</MenuItem>
              <MenuItem value={"Cloud"}>Cloud</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 0, minWidth: 150 }}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
              <MenuItem value={"Manage"}>Manage</MenuItem>
              <MenuItem value={"Economy"}>Economy</MenuItem>
              <MenuItem value={"Security"}>Security</MenuItem>
              <MenuItem value={"AI"}>AI</MenuItem>
              <MenuItem value={"Blockchain"}>Blockchain</MenuItem>
              <MenuItem value={"Cloud"}>Cloud</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ m: 0, minWidth: 150 }}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
              <MenuItem value={"Manage"}>Manage</MenuItem>
              <MenuItem value={"Economy"}>Economy</MenuItem>
              <MenuItem value={"Security"}>Security</MenuItem>
              <MenuItem value={"AI"}>AI</MenuItem>
              <MenuItem value={"Blockchain"}>Blockchain</MenuItem>
              <MenuItem value={"Cloud"}>Cloud</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 0, minWidth: 150 }}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
              <MenuItem value={"Manage"}>Manage</MenuItem>
              <MenuItem value={"Economy"}>Economy</MenuItem>
              <MenuItem value={"Security"}>Security</MenuItem>
              <MenuItem value={"AI"}>AI</MenuItem>
              <MenuItem value={"Blockchain"}>Blockchain</MenuItem>
              <MenuItem value={"Cloud"}>Cloud</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ m: 0, minWidth: 150 }}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
              <MenuItem value={"Manage"}>Manage</MenuItem>
              <MenuItem value={"Economy"}>Economy</MenuItem>
              <MenuItem value={"Security"}>Security</MenuItem>
              <MenuItem value={"AI"}>AI</MenuItem>
              <MenuItem value={"Blockchain"}>Blockchain</MenuItem>
              <MenuItem value={"Cloud"}>Cloud</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 0, minWidth: 150 }}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
              <MenuItem value={"Manage"}>Manage</MenuItem>
              <MenuItem value={"Economy"}>Economy</MenuItem>
              <MenuItem value={"Security"}>Security</MenuItem>
              <MenuItem value={"AI"}>AI</MenuItem>
              <MenuItem value={"Blockchain"}>Blockchain</MenuItem>
              <MenuItem value={"Cloud"}>Cloud</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ m: 0, minWidth: 150 }}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
              <MenuItem value={"Manage"}>Manage</MenuItem>
              <MenuItem value={"Economy"}>Economy</MenuItem>
              <MenuItem value={"Security"}>Security</MenuItem>
              <MenuItem value={"AI"}>AI</MenuItem>
              <MenuItem value={"Blockchain"}>Blockchain</MenuItem>
              <MenuItem value={"Cloud"}>Cloud</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 0, minWidth: 150 }}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
              <MenuItem value={"Manage"}>Manage</MenuItem>
              <MenuItem value={"Economy"}>Economy</MenuItem>
              <MenuItem value={"Security"}>Security</MenuItem>
              <MenuItem value={"AI"}>AI</MenuItem>
              <MenuItem value={"Blockchain"}>Blockchain</MenuItem>
              <MenuItem value={"Cloud"}>Cloud</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ m: 0, minWidth: 150 }}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
              <MenuItem value={"Manage"}>Manage</MenuItem>
              <MenuItem value={"Economy"}>Economy</MenuItem>
              <MenuItem value={"Security"}>Security</MenuItem>
              <MenuItem value={"AI"}>AI</MenuItem>
              <MenuItem value={"Blockchain"}>Blockchain</MenuItem>
              <MenuItem value={"Cloud"}>Cloud</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 0, minWidth: 150 }}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
              <MenuItem value={"Manage"}>Manage</MenuItem>
              <MenuItem value={"Economy"}>Economy</MenuItem>
              <MenuItem value={"Security"}>Security</MenuItem>
              <MenuItem value={"AI"}>AI</MenuItem>
              <MenuItem value={"Blockchain"}>Blockchain</MenuItem>
              <MenuItem value={"Cloud"}>Cloud</MenuItem>
            </Select>
          </FormControl>


        </div>


      </VoteView>

      <VoteButton>
        <MuiButton variant="contained">Vote</MuiButton>
      </VoteButton>
    </VotingView >
  )
}

export default Voting 
