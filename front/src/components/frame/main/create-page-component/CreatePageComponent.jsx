import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import { Button as MuiButton } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CreateBoardView = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  justify-content: center;
  width: 90%;
  height: 700px;
`;

const TitleInput = styled.div`
  position: relative;
`;

const CreatedView = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 24px;
  margin: 10px;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 4px;
`;

const FieldTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 4px;
`;

const ButtonView = styled.div`
  margin-top: 15px;
  float: right;
  margin-right: 5px;
`;

const CreatePageComponent = () => {
    const navigate = useNavigate();
    const [titleValue, setTitleValue] = useState('');
    const [contentValue, setContentValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const userId = useSelector(state=> (state.myProfile.userData.db_id));

    const handleSignUp = () => {
      if(categoryValue === ""){
        alert("카테고리를 선택해주세요");
        return;
      }

    if (!userId) {
        alert('Login first before create a post');
        return;
    }
      const data = {
        user_id : userId,
        category : categoryValue,
        title : titleValue,
        content : contentValue
      }
      axios
        .post("http://localhost:3000/board/create", data)
        .then((res) => {
          console.log(res.data);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        })
  
    }
    return (
      <div>
        <CreateBoardView>
          <CreatedView>
            <FormControl sx={{ m: 0, minWidth: 150 }}>
              <InputLabel htmlFor="category">category</InputLabel>
              <Select defaultValue="" vlaue={categoryValue} onChange={e => setCategoryValue(e.target.value)} id="category-select" label="category">
                <MenuItem value={"management"}>Manage</MenuItem>
                <MenuItem value={"economy"}>Economy</MenuItem>
                <MenuItem value={"security"}>Security</MenuItem>
                <MenuItem value={"ai"}>AI</MenuItem>
                <MenuItem value={"blockchain"}>Blockchain</MenuItem>
                <MenuItem value={"cloud"}>Cloud</MenuItem>
              </Select>
            </FormControl>
  
            <FieldTitle>제목</FieldTitle>
            <TitleInput>
              <TextField
                label="Title"
                required
                name="id"
                fullWidth
                value={titleValue}
                onChange={e => setTitleValue(e.target.value)}
              />
            </TitleInput>
            <FieldTitle>내용</FieldTitle>
            <Textarea
              label="Text Area"
              value={contentValue}
              onChange={e => setContentValue(e.target.value)}
              placeholder="내용을 입력하세요."
              minRows={15}
              maxRows={15}
              style={{ overflowY: 'auto' }}
              sx={{
                '&::before': {
                  display: 'none',
                },
                '&:focus-within': {
                  outline: '2px solid var(--Textarea-focusedHighlight)',
                  outlineOffset: '2px',
                },
              }}
            />
            <ButtonView>
            <MuiButton onClick={handleSignUp} variant="contained" >Create</MuiButton>
            </ButtonView>
            <ButtonView>
              <MuiButton variant="contained" >Save Draft</MuiButton>
            </ButtonView>
          </CreatedView>
        </CreateBoardView>
  
      </div>
  )
}

export default CreatePageComponent
