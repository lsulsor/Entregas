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
  const [value, setValue] = React.useState("Google");
  const [debouncedFilter] = useDebounce(value, 1000);

  const loadUsers = () =>{
        if (debouncedFilter =="") {

        } else {
               fetch(`https://api.github.com/orgs/${debouncedFilter}/members`)
                 .then((response) => response.json())
                 .then((json) => setMembers(json));
        }

  }


  return {members, value, setValue, debouncedFilter, loadUsers}

}

export const ListPage: React.FC = () => {
  const { members, value, setValue, debouncedFilter, loadUsers } = useList();
  React.useEffect(() => {
   loadUsers(); 
  }, [debouncedFilter]);
  return (
    <>
      <div className="">
        <section className="form-sectionList">
          <label className="labelList">
            Type the name of the organization to search for it in the Github API
          </label>
          <Input
            color="success"
            className="input"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            required
          />
        </section>
      </div>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>

        {Array.isArray(members)
          ? members.map((member) => (
              <>
                <img src={member.avatar_url} />
                <span>{member.id}</span>
                <Link to={`/detail/${member.login}/`}>{member.login}</Link>
              </>
            ))
          : null}
      </div>
    </>
  );
};
