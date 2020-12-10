import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useRouter} from "next/router";
import {routes} from "../constants/routes";
import {selectIsUserAuthorized} from "../store";

const RequireAuthHOC = Component => props => {
  const router = useRouter();
  const isAuthorized = useSelector(selectIsUserAuthorized);

  useEffect(() => {
    if (!isAuthorized)
      router.push(routes.home());
  }, [isAuthorized, router])

  return isAuthorized ? <Component {...props} /> : null;
};

export default RequireAuthHOC;
