-- CreateTable
CREATE TABLE "cartao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "numCartao" TEXT NOT NULL,
    "codigodeseguranca" TEXT NOT NULL,
    "datadevencimento" TEXT NOT NULL,

    CONSTRAINT "cartao_pkey" PRIMARY KEY ("id")
);
