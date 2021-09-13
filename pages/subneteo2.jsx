import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Appbar from "../components/appbar";

export default function Subneteo2() {
    return (
        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
                <title>Programa de subneteo</title>
            </Head>

            <Appbar colorChildren="secondary" title="Subneteo por hosts requeridos" />
        </div>
    )
}
