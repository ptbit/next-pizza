import React from 'react';

export default function ProductPage({ params: { id } }: { params: { id: string } }) {
  return <>Product page for id {id}</>;
}
