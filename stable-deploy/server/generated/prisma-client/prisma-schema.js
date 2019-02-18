module.exports = {
        typeDefs: /* GraphQL */ `type AggregateRaffle {
  count: Int!
}

type AggregateSeller {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createRaffle(data: RaffleCreateInput!): Raffle!
  updateRaffle(data: RaffleUpdateInput!, where: RaffleWhereUniqueInput!): Raffle
  updateManyRaffles(data: RaffleUpdateManyMutationInput!, where: RaffleWhereInput): BatchPayload!
  upsertRaffle(where: RaffleWhereUniqueInput!, create: RaffleCreateInput!, update: RaffleUpdateInput!): Raffle!
  deleteRaffle(where: RaffleWhereUniqueInput!): Raffle
  deleteManyRaffles(where: RaffleWhereInput): BatchPayload!
  createSeller(data: SellerCreateInput!): Seller!
  updateSeller(data: SellerUpdateInput!, where: SellerWhereUniqueInput!): Seller
  updateManySellers(data: SellerUpdateManyMutationInput!, where: SellerWhereInput): BatchPayload!
  upsertSeller(where: SellerWhereUniqueInput!, create: SellerCreateInput!, update: SellerUpdateInput!): Seller!
  deleteSeller(where: SellerWhereUniqueInput!): Seller
  deleteManySellers(where: SellerWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  raffle(where: RaffleWhereUniqueInput!): Raffle
  raffles(where: RaffleWhereInput, orderBy: RaffleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Raffle]!
  rafflesConnection(where: RaffleWhereInput, orderBy: RaffleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RaffleConnection!
  seller(where: SellerWhereUniqueInput!): Seller
  sellers(where: SellerWhereInput, orderBy: SellerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Seller]!
  sellersConnection(where: SellerWhereInput, orderBy: SellerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SellerConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Raffle {
  id: ID!
  name: String!
  picture: String!
  desc: String
  daysLeft: Float!
  ticketsSold: Float
  numTickets: Float
  minTickets: Float!
  active: Boolean
  Seller: Seller!
}

type RaffleConnection {
  pageInfo: PageInfo!
  edges: [RaffleEdge]!
  aggregate: AggregateRaffle!
}

input RaffleCreateInput {
  name: String!
  picture: String!
  desc: String
  daysLeft: Float!
  ticketsSold: Float
  numTickets: Float
  minTickets: Float!
  active: Boolean
  Seller: SellerCreateOneWithoutRafflesInput!
}

input RaffleCreateManyWithoutSellerInput {
  create: [RaffleCreateWithoutSellerInput!]
  connect: [RaffleWhereUniqueInput!]
}

input RaffleCreateWithoutSellerInput {
  name: String!
  picture: String!
  desc: String
  daysLeft: Float!
  ticketsSold: Float
  numTickets: Float
  minTickets: Float!
  active: Boolean
}

type RaffleEdge {
  node: Raffle!
  cursor: String!
}

enum RaffleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  picture_ASC
  picture_DESC
  desc_ASC
  desc_DESC
  daysLeft_ASC
  daysLeft_DESC
  ticketsSold_ASC
  ticketsSold_DESC
  numTickets_ASC
  numTickets_DESC
  minTickets_ASC
  minTickets_DESC
  active_ASC
  active_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RafflePreviousValues {
  id: ID!
  name: String!
  picture: String!
  desc: String
  daysLeft: Float!
  ticketsSold: Float
  numTickets: Float
  minTickets: Float!
  active: Boolean
}

input RaffleScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  picture: String
  picture_not: String
  picture_in: [String!]
  picture_not_in: [String!]
  picture_lt: String
  picture_lte: String
  picture_gt: String
  picture_gte: String
  picture_contains: String
  picture_not_contains: String
  picture_starts_with: String
  picture_not_starts_with: String
  picture_ends_with: String
  picture_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  daysLeft: Float
  daysLeft_not: Float
  daysLeft_in: [Float!]
  daysLeft_not_in: [Float!]
  daysLeft_lt: Float
  daysLeft_lte: Float
  daysLeft_gt: Float
  daysLeft_gte: Float
  ticketsSold: Float
  ticketsSold_not: Float
  ticketsSold_in: [Float!]
  ticketsSold_not_in: [Float!]
  ticketsSold_lt: Float
  ticketsSold_lte: Float
  ticketsSold_gt: Float
  ticketsSold_gte: Float
  numTickets: Float
  numTickets_not: Float
  numTickets_in: [Float!]
  numTickets_not_in: [Float!]
  numTickets_lt: Float
  numTickets_lte: Float
  numTickets_gt: Float
  numTickets_gte: Float
  minTickets: Float
  minTickets_not: Float
  minTickets_in: [Float!]
  minTickets_not_in: [Float!]
  minTickets_lt: Float
  minTickets_lte: Float
  minTickets_gt: Float
  minTickets_gte: Float
  active: Boolean
  active_not: Boolean
  AND: [RaffleScalarWhereInput!]
  OR: [RaffleScalarWhereInput!]
  NOT: [RaffleScalarWhereInput!]
}

type RaffleSubscriptionPayload {
  mutation: MutationType!
  node: Raffle
  updatedFields: [String!]
  previousValues: RafflePreviousValues
}

input RaffleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RaffleWhereInput
  AND: [RaffleSubscriptionWhereInput!]
  OR: [RaffleSubscriptionWhereInput!]
  NOT: [RaffleSubscriptionWhereInput!]
}

input RaffleUpdateInput {
  name: String
  picture: String
  desc: String
  daysLeft: Float
  ticketsSold: Float
  numTickets: Float
  minTickets: Float
  active: Boolean
  Seller: SellerUpdateOneRequiredWithoutRafflesInput
}

input RaffleUpdateManyDataInput {
  name: String
  picture: String
  desc: String
  daysLeft: Float
  ticketsSold: Float
  numTickets: Float
  minTickets: Float
  active: Boolean
}

input RaffleUpdateManyMutationInput {
  name: String
  picture: String
  desc: String
  daysLeft: Float
  ticketsSold: Float
  numTickets: Float
  minTickets: Float
  active: Boolean
}

input RaffleUpdateManyWithoutSellerInput {
  create: [RaffleCreateWithoutSellerInput!]
  delete: [RaffleWhereUniqueInput!]
  connect: [RaffleWhereUniqueInput!]
  set: [RaffleWhereUniqueInput!]
  disconnect: [RaffleWhereUniqueInput!]
  update: [RaffleUpdateWithWhereUniqueWithoutSellerInput!]
  upsert: [RaffleUpsertWithWhereUniqueWithoutSellerInput!]
  deleteMany: [RaffleScalarWhereInput!]
  updateMany: [RaffleUpdateManyWithWhereNestedInput!]
}

input RaffleUpdateManyWithWhereNestedInput {
  where: RaffleScalarWhereInput!
  data: RaffleUpdateManyDataInput!
}

input RaffleUpdateWithoutSellerDataInput {
  name: String
  picture: String
  desc: String
  daysLeft: Float
  ticketsSold: Float
  numTickets: Float
  minTickets: Float
  active: Boolean
}

input RaffleUpdateWithWhereUniqueWithoutSellerInput {
  where: RaffleWhereUniqueInput!
  data: RaffleUpdateWithoutSellerDataInput!
}

input RaffleUpsertWithWhereUniqueWithoutSellerInput {
  where: RaffleWhereUniqueInput!
  update: RaffleUpdateWithoutSellerDataInput!
  create: RaffleCreateWithoutSellerInput!
}

input RaffleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  picture: String
  picture_not: String
  picture_in: [String!]
  picture_not_in: [String!]
  picture_lt: String
  picture_lte: String
  picture_gt: String
  picture_gte: String
  picture_contains: String
  picture_not_contains: String
  picture_starts_with: String
  picture_not_starts_with: String
  picture_ends_with: String
  picture_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  daysLeft: Float
  daysLeft_not: Float
  daysLeft_in: [Float!]
  daysLeft_not_in: [Float!]
  daysLeft_lt: Float
  daysLeft_lte: Float
  daysLeft_gt: Float
  daysLeft_gte: Float
  ticketsSold: Float
  ticketsSold_not: Float
  ticketsSold_in: [Float!]
  ticketsSold_not_in: [Float!]
  ticketsSold_lt: Float
  ticketsSold_lte: Float
  ticketsSold_gt: Float
  ticketsSold_gte: Float
  numTickets: Float
  numTickets_not: Float
  numTickets_in: [Float!]
  numTickets_not_in: [Float!]
  numTickets_lt: Float
  numTickets_lte: Float
  numTickets_gt: Float
  numTickets_gte: Float
  minTickets: Float
  minTickets_not: Float
  minTickets_in: [Float!]
  minTickets_not_in: [Float!]
  minTickets_lt: Float
  minTickets_lte: Float
  minTickets_gt: Float
  minTickets_gte: Float
  active: Boolean
  active_not: Boolean
  Seller: SellerWhereInput
  AND: [RaffleWhereInput!]
  OR: [RaffleWhereInput!]
  NOT: [RaffleWhereInput!]
}

input RaffleWhereUniqueInput {
  id: ID
}

type Seller {
  id: ID!
  email: String!
  Raffles(where: RaffleWhereInput, orderBy: RaffleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Raffle!]
}

type SellerConnection {
  pageInfo: PageInfo!
  edges: [SellerEdge]!
  aggregate: AggregateSeller!
}

input SellerCreateInput {
  email: String!
  Raffles: RaffleCreateManyWithoutSellerInput
}

input SellerCreateOneWithoutRafflesInput {
  create: SellerCreateWithoutRafflesInput
  connect: SellerWhereUniqueInput
}

input SellerCreateWithoutRafflesInput {
  email: String!
}

type SellerEdge {
  node: Seller!
  cursor: String!
}

enum SellerOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SellerPreviousValues {
  id: ID!
  email: String!
}

type SellerSubscriptionPayload {
  mutation: MutationType!
  node: Seller
  updatedFields: [String!]
  previousValues: SellerPreviousValues
}

input SellerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SellerWhereInput
  AND: [SellerSubscriptionWhereInput!]
  OR: [SellerSubscriptionWhereInput!]
  NOT: [SellerSubscriptionWhereInput!]
}

input SellerUpdateInput {
  email: String
  Raffles: RaffleUpdateManyWithoutSellerInput
}

input SellerUpdateManyMutationInput {
  email: String
}

input SellerUpdateOneRequiredWithoutRafflesInput {
  create: SellerCreateWithoutRafflesInput
  update: SellerUpdateWithoutRafflesDataInput
  upsert: SellerUpsertWithoutRafflesInput
  connect: SellerWhereUniqueInput
}

input SellerUpdateWithoutRafflesDataInput {
  email: String
}

input SellerUpsertWithoutRafflesInput {
  update: SellerUpdateWithoutRafflesDataInput!
  create: SellerCreateWithoutRafflesInput!
}

input SellerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  Raffles_every: RaffleWhereInput
  Raffles_some: RaffleWhereInput
  Raffles_none: RaffleWhereInput
  AND: [SellerWhereInput!]
  OR: [SellerWhereInput!]
  NOT: [SellerWhereInput!]
}

input SellerWhereUniqueInput {
  id: ID
}

type Subscription {
  raffle(where: RaffleSubscriptionWhereInput): RaffleSubscriptionPayload
  seller(where: SellerSubscriptionWhereInput): SellerSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    