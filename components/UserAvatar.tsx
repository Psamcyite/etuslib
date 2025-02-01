"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";

const UserAvatar = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  if (!session?.user) return null; // Hide if user is not logged in

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-1 rounded-full focus:outline-none">
          <Avatar className="w-10 h-10 border border-gray-300">
            <AvatarImage src={session.user.image || "/icons/avatar.svg"} alt="User Avatar" />
            <AvatarFallback className="bg-gray-200 text-gray-600 uppercase">
              {session.user.name?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 bg-white shadow-md rounded-lg p-2">
        <div className="px-3 py-2 text-sm">
          <p className="font-semibold">{session.user.name}</p>
          <p className="text-gray-500 truncate">{session.user.email}</p>
        </div>

        <DropdownMenuItem className="cursor-pointer flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md" onClick={() => alert("Go to Profile")}>
          <User size={16} /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md" onClick={() => alert("Go to Settings")}>
          <Settings size={16} /> Settings
        </DropdownMenuItem>

        <DropdownMenuItem
          className="cursor-pointer flex items-center gap-2 hover:bg-red-100 text-red-500 p-2 rounded-md"
          onClick={() => signOut()}
        >
          <LogOut size={16} /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
