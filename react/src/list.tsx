import React from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import Input from "@mui/material/Input";
import { Typography } from '@mui/material';


interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}



const useList = () => {

  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [value, setValue] = React.useState("lemoncode");
  const [debouncedFilter] = useDebounce(value, 1000);

  const loadUsers = () =>{
    fetch(`https://api.github.com/orgs/${debouncedFilter}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }


  return {members, value, setValue, debouncedFilter, loadUsers}

}

export const ListPage: React.FC = () => {

const { members, value, setValue, debouncedFilter, loadUsers} = useList();
  React.useEffect(() => {
   loadUsers(); 
  }, [debouncedFilter]);
  return (
    <>
      <Input
        color="success"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
        Hello from List page
      </Typography>
     
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}/`}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
