import React from 'react';
import { URL_IMG, IMG_SIZE_SMALL } from '../const'
import { Image } from 'react-bootstrap'
import styled from 'styled-components'
import { Glyphicon } from 'react-bootstrap'

export default function Poster(props){

  const StyledImg = styled.div`
    &:hover .image{
       opacity:1;
    }
    &:hover .title{
       opacity: ${props.info ? 1:0};
    }
  `;
  const Info =  styled.div`
      position: absolute;
      top: 75%;
      margin:10px;
      color:white;
      font-weight:bold;
      opacity:0;
  `;
  return(
    <StyledImg style={{marginBottom:"10px"}}>
      <Image className="image" key={props.id} src={URL_IMG+IMG_SIZE_SMALL+props.path} responsive />
      {props.info &&
      <Info className="title">
        <h4>{props.title}</h4>
        <Glyphicon glyph={'star'} /> {props.voteAverage} &nbsp;&nbsp; {props.release_date.substring(0,4)}
      </Info>
      }
    </StyledImg>
  );
}
