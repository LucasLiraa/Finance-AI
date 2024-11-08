import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/_ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/_ui/data-tabel";
import { transactionColumns } from "./_columns";

const TransactionsPage = async () => {
  // acessa as transações do meu banco de dados
  const transactions = await db.transaction.findMany({});
  return (
    <div className="p-6 space-y-6">
      {/*Titulo e Botão*/}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
