import {  UseGuards, applyDecorators } from "@nestjs/common";
import { Role } from "../enums/role.enum";
import { Roles } from "./roles.decorator";
import { AuthGuard } from "../guard/auth.guard";
import { RolesGuard } from "../guard/roles.guard";

export const Auth = (roles: Role[]) => applyDecorators(
  Roles(roles),
  UseGuards(AuthGuard, RolesGuard)
)
