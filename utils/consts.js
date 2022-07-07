export const columns = [
  {
    Header: "Name",
    accessor: "first_name",
  },
  {
    Header: "Address",
    accessor: "billing_address",
  },
  {
    Header: "Country",
    accessor: "country",
  },

  {
    Header: "Status",
    accessor: "transaction_status_description",
  },
  {
    Header: "Company",
    accessor: "official_company_name",
  },
  {
    Header: "Price",
    accessor: "price",
    isNumeric: true,
  },
]
