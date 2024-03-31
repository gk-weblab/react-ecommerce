import React from "react";
import useAuth from "../hooks/useAuth";
import {LuUser} from "react-icons/lu";
import {TiUser} from "react-icons/ti";
import {Link} from "react-router-dom";

const User = () => {
	let user = useAuth();

	return (
		<div className="p-4 ">
			<div className="flex items-center gap-4 p-2">
				{user.profile ? (
					<img src={user.profile}></img>
				) : (
					<TiUser className="text-6xl text-gray-500 rounded-full ring ring-gray-400" />
				)}

				<div className="flex flex-col justify-center leading-3">
					<h2 className="text-4xl font-bold capitalize font-geo">
						{user.name}
					</h2>
					<h4 className="pl-2 text-gray-400">{user.email}</h4>
				</div>
			</div>
			<div>
				<div className="p-4 text-2xl border">
					<Link to={"/order/history"}>Orders</Link>
				</div>
				<div className="p-4 text-2xl border">Address</div>
				<div className="p-4 text-2xl border">Personal </div>
			</div>
		</div>
	);
};

export default User;
