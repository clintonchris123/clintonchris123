<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div id="successMessage" class="mt-4 bg-green-300 py-3 text-white px-9 rounded-lg text-center" style="display: none;">
        User berhasil dihapus
    </div>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100 text-center">
                    <h1 class="text-2xl font-bold mb-4">Daftar User</h1>
                    <div class="overflow-x-auto">
                        <table class="min-w-full rounded-lg overflow-hidden">
                            <thead class="bg-gray-100 text-gray-800 text-sm font-semibold">
                                <tr>
                                    <th class="px-5 py-3 text-center">No</th>
                                    <th class="px-5 py-3 text-center min-w-50">Nama</th>
                                    <th class="px-5 py-3 text-center min-w-40">Email</th>
                                    <th class="px-5 py-3 text-center min-w-40">Aksi</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-700" id="userTable">
                                @php
                                    $currentPage = $dataUser->currentPage();
                                    $perPage = $dataUser->perPage();
                                    $totalItems = $dataUser->total();
                                    $startingNumber = ($currentPage - 1) * $perPage + 1;
                                @endphp
                                @foreach($dataUser as $datauser)
                                    <tr class="bg-[#E3EBF3]" data-id="{{ $datauser->id }}">
                                        <td class="px-4 py-3 text-center">{{ $startingNumber++ }}</td>
                                        <td class="px-4 py-3 text-center">{{ $datauser->name }}</td>
                                        <td class="px-4 py-3 text-center">{{ $datauser->email }}</td>
                                        <td class="px-4 py-3 text-center">
                                            <button class="bg-red-500 text-white font-bold py-2 px-4 rounded" 
                                                    onclick="deleteUser({{ $datauser->id }}, this)">
                                                Hapus
                                            </button>
                                        </td>                                
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                        {{ $dataUser->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function deleteUser(id, btn) {
            if (confirm('Yakin ingin menghapus?')) {
                fetch(`/datauser/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': '{{ csrf_token() }}'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        // Menghapus baris dari tabel
                        let row = btn.closest('tr');
                        row.remove();

                        // Menampilkan pesan sukses
                        let successMessage = document.getElementById('successMessage');
                        successMessage.style.display = 'block';
                        // Menghilangkan pesan sukses setelah 3 detik
                        setTimeout(() => {
                            successMessage.style.display = 'none';
                        }, 3000);

                        // Memuat ulang data tabel
                        reloadTable();
                    } else {
                        alert('Gagal menghapus data');
                    }
                });
            }
        }

        function reloadTable() {
            fetch('/datauser')
                .then(response => response.text())
                .then(data => {
                    // Mengambil HTML tabel baru
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(data, 'text/html');
                    const newTableBody = doc.getElementById('userTable').innerHTML;
                    
                    // Mengganti tabel lama dengan tabel baru
                    document.getElementById('userTable').innerHTML = newTableBody;
                });
        }
    </script>
</x-app-layout>
