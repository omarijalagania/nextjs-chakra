export const columns = [
  {
    Header: "Created",
    accessor: "created_at",
  },
  {
    Header: "Company",
    accessor: "official_company_name",
  },
  {
    Header: "Country",
    accessor: "country",
  },

  {
    Header: "Address",
    accessor: "billing_address",
  },
  {
    Header: "Phone",
    accessor: "phone_number",
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Price",
    accessor: "paid_price",
    isNumeric: true,
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Package",
    accessor: "purchased_package_name",
  },
  {
    Header: "Description",
    accessor: "transaction_status_description",
  },
]
