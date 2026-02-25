import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "src/pages/login.html"),
        home: resolve(__dirname, "src/pages/home.html"),
        addMoney: resolve(__dirname, "src/pages/add-money.html"),
        cashout: resolve(__dirname, "src/pages/cashout.html"),
        transfer: resolve(__dirname, "src/pages/transfer.html"),
        payBill: resolve(__dirname, "src/pages/pay-bill.html"),
        bonus: resolve(__dirname, "src/pages/bonus.html"),
        transactions: resolve(__dirname, "src/pages/transactions.html"),
      },
    },
  },
});